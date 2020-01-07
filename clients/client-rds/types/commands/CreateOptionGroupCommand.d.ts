import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOptionGroupCommandInput = CreateOptionGroupMessage;
export declare type CreateOptionGroupCommandOutput = CreateOptionGroupResult & __MetadataBearer;
export declare class CreateOptionGroupCommand extends $Command<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateOptionGroupCommandInput;
    constructor(input: CreateOptionGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
