import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteChangeSetInput, DeleteChangeSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteChangeSetCommandInput = DeleteChangeSetInput;
export declare type DeleteChangeSetCommandOutput = DeleteChangeSetOutput & __MetadataBearer;
export declare class DeleteChangeSetCommand extends $Command<DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DeleteChangeSetCommandInput;
    constructor(input: DeleteChangeSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
