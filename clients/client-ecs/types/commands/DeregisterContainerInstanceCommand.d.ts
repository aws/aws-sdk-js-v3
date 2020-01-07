import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterContainerInstanceCommandInput = DeregisterContainerInstanceRequest;
export declare type DeregisterContainerInstanceCommandOutput = DeregisterContainerInstanceResponse & __MetadataBearer;
export declare class DeregisterContainerInstanceCommand extends $Command<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeregisterContainerInstanceCommandInput;
    constructor(input: DeregisterContainerInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
