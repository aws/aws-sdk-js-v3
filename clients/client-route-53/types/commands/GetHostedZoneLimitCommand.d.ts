import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHostedZoneLimitCommandInput = GetHostedZoneLimitRequest;
export declare type GetHostedZoneLimitCommandOutput = GetHostedZoneLimitResponse & __MetadataBearer;
export declare class GetHostedZoneLimitCommand extends $Command<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneLimitCommandInput;
    constructor(input: GetHostedZoneLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput>;
    private serialize;
    private deserialize;
}
