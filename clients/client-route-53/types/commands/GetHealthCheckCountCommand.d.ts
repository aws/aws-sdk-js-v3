import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckCountRequest, GetHealthCheckCountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHealthCheckCountCommandInput = GetHealthCheckCountRequest;
export declare type GetHealthCheckCountCommandOutput = GetHealthCheckCountResponse & __MetadataBearer;
export declare class GetHealthCheckCountCommand extends $Command<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckCountCommandInput;
    constructor(input: GetHealthCheckCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput>;
    private serialize;
    private deserialize;
}
