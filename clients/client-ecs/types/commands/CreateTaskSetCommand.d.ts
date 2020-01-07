import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateTaskSetRequest, CreateTaskSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTaskSetCommandInput = CreateTaskSetRequest;
export declare type CreateTaskSetCommandOutput = CreateTaskSetResponse & __MetadataBearer;
export declare class CreateTaskSetCommand extends $Command<CreateTaskSetCommandInput, CreateTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateTaskSetCommandInput;
    constructor(input: CreateTaskSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTaskSetCommandInput, CreateTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
