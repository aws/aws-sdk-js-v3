import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualRouterInput, DeleteVirtualRouterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVirtualRouterCommandInput = DeleteVirtualRouterInput;
export declare type DeleteVirtualRouterCommandOutput = DeleteVirtualRouterOutput & __MetadataBearer;
export declare class DeleteVirtualRouterCommand extends $Command<DeleteVirtualRouterCommandInput, DeleteVirtualRouterCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DeleteVirtualRouterCommandInput;
    constructor(input: DeleteVirtualRouterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualRouterCommandInput, DeleteVirtualRouterCommandOutput>;
    private serialize;
    private deserialize;
}
