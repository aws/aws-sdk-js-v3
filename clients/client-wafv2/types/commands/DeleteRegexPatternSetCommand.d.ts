import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteRegexPatternSetRequest, DeleteRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRegexPatternSetCommandInput = DeleteRegexPatternSetRequest;
export declare type DeleteRegexPatternSetCommandOutput = DeleteRegexPatternSetResponse & __MetadataBearer;
export declare class DeleteRegexPatternSetCommand extends $Command<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteRegexPatternSetCommandInput;
    constructor(input: DeleteRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
