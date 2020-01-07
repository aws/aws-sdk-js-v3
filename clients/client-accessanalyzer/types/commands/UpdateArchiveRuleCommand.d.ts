import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { UpdateArchiveRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateArchiveRuleCommandInput = UpdateArchiveRuleRequest;
export declare type UpdateArchiveRuleCommandOutput = __MetadataBearer;
export declare class UpdateArchiveRuleCommand extends $Command<UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: UpdateArchiveRuleCommandInput;
    constructor(input: UpdateArchiveRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput>;
    private serialize;
    private deserialize;
}
