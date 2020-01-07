import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVirtualServiceCommandInput = CreateVirtualServiceInput;
export declare type CreateVirtualServiceCommandOutput = CreateVirtualServiceOutput & __MetadataBearer;
export declare class CreateVirtualServiceCommand extends $Command<CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: CreateVirtualServiceCommandInput;
    constructor(input: CreateVirtualServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput>;
    private serialize;
    private deserialize;
}
