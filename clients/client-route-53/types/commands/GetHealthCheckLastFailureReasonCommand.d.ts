import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHealthCheckLastFailureReasonCommandInput = GetHealthCheckLastFailureReasonRequest;
export declare type GetHealthCheckLastFailureReasonCommandOutput = GetHealthCheckLastFailureReasonResponse & __MetadataBearer;
export declare class GetHealthCheckLastFailureReasonCommand extends $Command<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckLastFailureReasonCommandInput;
    constructor(input: GetHealthCheckLastFailureReasonCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput>;
    private serialize;
    private deserialize;
}
