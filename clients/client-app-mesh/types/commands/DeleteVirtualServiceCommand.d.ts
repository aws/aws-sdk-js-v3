import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualServiceInput, DeleteVirtualServiceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVirtualServiceCommandInput = DeleteVirtualServiceInput;
export declare type DeleteVirtualServiceCommandOutput = DeleteVirtualServiceOutput & __MetadataBearer;
export declare class DeleteVirtualServiceCommand extends $Command<DeleteVirtualServiceCommandInput, DeleteVirtualServiceCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DeleteVirtualServiceCommandInput;
    constructor(input: DeleteVirtualServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualServiceCommandInput, DeleteVirtualServiceCommandOutput>;
    private serialize;
    private deserialize;
}
