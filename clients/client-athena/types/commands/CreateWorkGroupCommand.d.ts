import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreateWorkGroupInput, CreateWorkGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWorkGroupCommandInput = CreateWorkGroupInput;
export declare type CreateWorkGroupCommandOutput = CreateWorkGroupOutput & __MetadataBearer;
export declare class CreateWorkGroupCommand extends $Command<CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput, AthenaClientResolvedConfig> {
    readonly input: CreateWorkGroupCommandInput;
    constructor(input: CreateWorkGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput>;
    private serialize;
    private deserialize;
}
