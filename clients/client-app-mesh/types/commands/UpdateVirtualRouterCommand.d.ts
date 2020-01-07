import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualRouterInput, UpdateVirtualRouterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVirtualRouterCommandInput = UpdateVirtualRouterInput;
export declare type UpdateVirtualRouterCommandOutput = UpdateVirtualRouterOutput & __MetadataBearer;
export declare class UpdateVirtualRouterCommand extends $Command<UpdateVirtualRouterCommandInput, UpdateVirtualRouterCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: UpdateVirtualRouterCommandInput;
    constructor(input: UpdateVirtualRouterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVirtualRouterCommandInput, UpdateVirtualRouterCommandOutput>;
    private serialize;
    private deserialize;
}
