import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateRegexPatternSetRequest, UpdateRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRegexPatternSetCommandInput = UpdateRegexPatternSetRequest;
export declare type UpdateRegexPatternSetCommandOutput = UpdateRegexPatternSetResponse & __MetadataBearer;
export declare class UpdateRegexPatternSetCommand extends $Command<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateRegexPatternSetCommandInput;
    constructor(input: UpdateRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
