import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { CreateStateMachineInput, CreateStateMachineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStateMachineCommandInput = CreateStateMachineInput;
export declare type CreateStateMachineCommandOutput = CreateStateMachineOutput & __MetadataBearer;
export declare class CreateStateMachineCommand extends $Command<CreateStateMachineCommandInput, CreateStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: CreateStateMachineCommandInput;
    constructor(input: CreateStateMachineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStateMachineCommandInput, CreateStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
