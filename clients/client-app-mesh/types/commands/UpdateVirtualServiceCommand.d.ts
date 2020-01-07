import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualServiceInput, UpdateVirtualServiceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVirtualServiceCommandInput = UpdateVirtualServiceInput;
export declare type UpdateVirtualServiceCommandOutput = UpdateVirtualServiceOutput & __MetadataBearer;
export declare class UpdateVirtualServiceCommand extends $Command<UpdateVirtualServiceCommandInput, UpdateVirtualServiceCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: UpdateVirtualServiceCommandInput;
    constructor(input: UpdateVirtualServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVirtualServiceCommandInput, UpdateVirtualServiceCommandOutput>;
    private serialize;
    private deserialize;
}
