import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { UpdateStateMachineInput, UpdateStateMachineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStateMachineCommandInput = UpdateStateMachineInput;
export declare type UpdateStateMachineCommandOutput = UpdateStateMachineOutput & __MetadataBearer;
export declare class UpdateStateMachineCommand extends $Command<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: UpdateStateMachineCommandInput;
    constructor(input: UpdateStateMachineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
