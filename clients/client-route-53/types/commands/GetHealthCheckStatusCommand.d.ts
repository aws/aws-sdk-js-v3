import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckStatusRequest, GetHealthCheckStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHealthCheckStatusCommandInput = GetHealthCheckStatusRequest;
export declare type GetHealthCheckStatusCommandOutput = GetHealthCheckStatusResponse & __MetadataBearer;
export declare class GetHealthCheckStatusCommand extends $Command<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckStatusCommandInput;
    constructor(input: GetHealthCheckStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput>;
    private serialize;
    private deserialize;
}
