import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateArchiveRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateArchiveRuleCommandInput = CreateArchiveRuleRequest;
export declare type CreateArchiveRuleCommandOutput = __MetadataBearer;
export declare class CreateArchiveRuleCommand extends $Command<CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: CreateArchiveRuleCommandInput;
    constructor(input: CreateArchiveRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput>;
    private serialize;
    private deserialize;
}
