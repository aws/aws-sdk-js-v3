import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteRouteInput, DeleteRouteOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRouteCommandInput = DeleteRouteInput;
export declare type DeleteRouteCommandOutput = DeleteRouteOutput & __MetadataBearer;
export declare class DeleteRouteCommand extends $Command<DeleteRouteCommandInput, DeleteRouteCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DeleteRouteCommandInput;
    constructor(input: DeleteRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteCommandInput, DeleteRouteCommandOutput>;
    private serialize;
    private deserialize;
}
