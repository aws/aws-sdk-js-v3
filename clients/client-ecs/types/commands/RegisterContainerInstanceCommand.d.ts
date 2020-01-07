import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RegisterContainerInstanceRequest, RegisterContainerInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterContainerInstanceCommandInput = RegisterContainerInstanceRequest;
export declare type RegisterContainerInstanceCommandOutput = RegisterContainerInstanceResponse & __MetadataBearer;
export declare class RegisterContainerInstanceCommand extends $Command<RegisterContainerInstanceCommandInput, RegisterContainerInstanceCommandOutput, ECSClientResolvedConfig> {
    readonly input: RegisterContainerInstanceCommandInput;
    constructor(input: RegisterContainerInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterContainerInstanceCommandInput, RegisterContainerInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
