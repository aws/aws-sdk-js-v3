import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListRegexPatternSetsRequest, ListRegexPatternSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRegexPatternSetsCommandInput = ListRegexPatternSetsRequest;
export declare type ListRegexPatternSetsCommandOutput = ListRegexPatternSetsResponse & __MetadataBearer;
export declare class ListRegexPatternSetsCommand extends $Command<ListRegexPatternSetsCommandInput, ListRegexPatternSetsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListRegexPatternSetsCommandInput;
    constructor(input: ListRegexPatternSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegexPatternSetsCommandInput, ListRegexPatternSetsCommandOutput>;
    private serialize;
    private deserialize;
}
