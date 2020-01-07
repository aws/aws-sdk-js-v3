import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateMeshInput, UpdateMeshOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMeshCommandInput = UpdateMeshInput;
export declare type UpdateMeshCommandOutput = UpdateMeshOutput & __MetadataBearer;
export declare class UpdateMeshCommand extends $Command<UpdateMeshCommandInput, UpdateMeshCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: UpdateMeshCommandInput;
    constructor(input: UpdateMeshCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMeshCommandInput, UpdateMeshCommandOutput>;
    private serialize;
    private deserialize;
}
