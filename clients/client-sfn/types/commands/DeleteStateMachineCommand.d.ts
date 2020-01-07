import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStateMachineCommandInput = DeleteStateMachineInput;
export declare type DeleteStateMachineCommandOutput = DeleteStateMachineOutput & __MetadataBearer;
export declare class DeleteStateMachineCommand extends $Command<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: DeleteStateMachineCommandInput;
    constructor(input: DeleteStateMachineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
