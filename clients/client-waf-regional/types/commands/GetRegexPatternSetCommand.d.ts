import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetRegexPatternSetRequest, GetRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRegexPatternSetCommandInput = GetRegexPatternSetRequest;
export declare type GetRegexPatternSetCommandOutput = GetRegexPatternSetResponse & __MetadataBearer;
export declare class GetRegexPatternSetCommand extends $Command<GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetRegexPatternSetCommandInput;
    constructor(input: GetRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
