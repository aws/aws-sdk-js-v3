import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateResourceGroupRequest, CreateResourceGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceGroupCommandInput = CreateResourceGroupRequest;
export declare type CreateResourceGroupCommandOutput = CreateResourceGroupResponse & __MetadataBearer;
export declare class CreateResourceGroupCommand extends $Command<CreateResourceGroupCommandInput, CreateResourceGroupCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateResourceGroupCommandInput;
    constructor(input: CreateResourceGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceGroupCommandInput, CreateResourceGroupCommandOutput>;
    private serialize;
    private deserialize;
}
