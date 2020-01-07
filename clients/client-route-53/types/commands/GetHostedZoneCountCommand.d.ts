import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHostedZoneCountCommandInput = GetHostedZoneCountRequest;
export declare type GetHostedZoneCountCommandOutput = GetHostedZoneCountResponse & __MetadataBearer;
export declare class GetHostedZoneCountCommand extends $Command<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneCountCommandInput;
    constructor(input: GetHostedZoneCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput>;
    private serialize;
    private deserialize;
}
