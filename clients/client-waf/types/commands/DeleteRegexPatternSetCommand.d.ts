import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteRegexPatternSetRequest, DeleteRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRegexPatternSetCommandInput = DeleteRegexPatternSetRequest;
export declare type DeleteRegexPatternSetCommandOutput = DeleteRegexPatternSetResponse & __MetadataBearer;
export declare class DeleteRegexPatternSetCommand extends $Command<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteRegexPatternSetCommandInput;
    constructor(input: DeleteRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
