import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { DeleteArchiveRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteArchiveRuleCommandInput = DeleteArchiveRuleRequest;
export declare type DeleteArchiveRuleCommandOutput = __MetadataBearer;
export declare class DeleteArchiveRuleCommand extends $Command<DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: DeleteArchiveRuleCommandInput;
    constructor(input: DeleteArchiveRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput>;
    private serialize;
    private deserialize;
}
