import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteMeshInput, DeleteMeshOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMeshCommandInput = DeleteMeshInput;
export declare type DeleteMeshCommandOutput = DeleteMeshOutput & __MetadataBearer;
export declare class DeleteMeshCommand extends $Command<DeleteMeshCommandInput, DeleteMeshCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DeleteMeshCommandInput;
    constructor(input: DeleteMeshCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMeshCommandInput, DeleteMeshCommandOutput>;
    private serialize;
    private deserialize;
}
