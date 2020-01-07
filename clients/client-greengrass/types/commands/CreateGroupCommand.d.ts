import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupRequest, CreateGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGroupCommandInput = CreateGroupRequest;
export declare type CreateGroupCommandOutput = CreateGroupResponse & __MetadataBearer;
export declare class CreateGroupCommand extends $Command<CreateGroupCommandInput, CreateGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateGroupCommandInput;
    constructor(input: CreateGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupCommandInput, CreateGroupCommandOutput>;
    private serialize;
    private deserialize;
}
