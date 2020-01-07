import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { DeleteRegexPatternSetRequest, DeleteRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRegexPatternSetCommandInput = DeleteRegexPatternSetRequest;
export declare type DeleteRegexPatternSetCommandOutput = DeleteRegexPatternSetResponse & __MetadataBearer;
export declare class DeleteRegexPatternSetCommand extends $Command<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: DeleteRegexPatternSetCommandInput;
    constructor(input: DeleteRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
