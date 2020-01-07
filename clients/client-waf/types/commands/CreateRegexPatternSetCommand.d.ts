import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateRegexPatternSetRequest, CreateRegexPatternSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRegexPatternSetCommandInput = CreateRegexPatternSetRequest;
export declare type CreateRegexPatternSetCommandOutput = CreateRegexPatternSetResponse & __MetadataBearer;
export declare class CreateRegexPatternSetCommand extends $Command<CreateRegexPatternSetCommandInput, CreateRegexPatternSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateRegexPatternSetCommandInput;
    constructor(input: CreateRegexPatternSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRegexPatternSetCommandInput, CreateRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
