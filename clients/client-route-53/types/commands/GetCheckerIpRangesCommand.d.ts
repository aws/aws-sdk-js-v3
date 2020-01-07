import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCheckerIpRangesCommandInput = GetCheckerIpRangesRequest;
export declare type GetCheckerIpRangesCommandOutput = GetCheckerIpRangesResponse & __MetadataBearer;
export declare class GetCheckerIpRangesCommand extends $Command<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetCheckerIpRangesCommandInput;
    constructor(input: GetCheckerIpRangesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput>;
    private serialize;
    private deserialize;
}
