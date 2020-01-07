import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneRequest, GetHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHostedZoneCommandInput = GetHostedZoneRequest;
export declare type GetHostedZoneCommandOutput = GetHostedZoneResponse & __MetadataBearer;
export declare class GetHostedZoneCommand extends $Command<GetHostedZoneCommandInput, GetHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneCommandInput;
    constructor(input: GetHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneCommandInput, GetHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
