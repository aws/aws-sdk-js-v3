import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualRouterInput, CreateVirtualRouterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVirtualRouterCommandInput = CreateVirtualRouterInput;
export declare type CreateVirtualRouterCommandOutput = CreateVirtualRouterOutput & __MetadataBearer;
export declare class CreateVirtualRouterCommand extends $Command<CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: CreateVirtualRouterCommandInput;
    constructor(input: CreateVirtualRouterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput>;
    private serialize;
    private deserialize;
}
