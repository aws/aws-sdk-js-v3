import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateRouteInput, UpdateRouteOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRouteCommandInput = UpdateRouteInput;
export declare type UpdateRouteCommandOutput = UpdateRouteOutput & __MetadataBearer;
export declare class UpdateRouteCommand extends $Command<UpdateRouteCommandInput, UpdateRouteCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: UpdateRouteCommandInput;
    constructor(input: UpdateRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRouteCommandInput, UpdateRouteCommandOutput>;
    private serialize;
    private deserialize;
}
