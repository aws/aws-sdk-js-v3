import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateServiceRequest, CreateServiceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateServiceCommandInput = CreateServiceRequest;
export declare type CreateServiceCommandOutput = CreateServiceResponse & __MetadataBearer;
export declare class CreateServiceCommand extends $Command<CreateServiceCommandInput, CreateServiceCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateServiceCommandInput;
    constructor(input: CreateServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceCommandInput, CreateServiceCommandOutput>;
    private serialize;
    private deserialize;
}
