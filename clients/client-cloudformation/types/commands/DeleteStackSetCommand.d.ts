import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteStackSetInput, DeleteStackSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStackSetCommandInput = DeleteStackSetInput;
export declare type DeleteStackSetCommandOutput = DeleteStackSetOutput & __MetadataBearer;
export declare class DeleteStackSetCommand extends $Command<DeleteStackSetCommandInput, DeleteStackSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DeleteStackSetCommandInput;
    constructor(input: DeleteStackSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStackSetCommandInput, DeleteStackSetCommandOutput>;
    private serialize;
    private deserialize;
}
