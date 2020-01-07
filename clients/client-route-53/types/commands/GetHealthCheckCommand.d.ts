import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckRequest, GetHealthCheckResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHealthCheckCommandInput = GetHealthCheckRequest;
export declare type GetHealthCheckCommandOutput = GetHealthCheckResponse & __MetadataBearer;
export declare class GetHealthCheckCommand extends $Command<GetHealthCheckCommandInput, GetHealthCheckCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckCommandInput;
    constructor(input: GetHealthCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckCommandInput, GetHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
