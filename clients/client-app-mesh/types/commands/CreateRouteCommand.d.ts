import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateRouteInput, CreateRouteOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRouteCommandInput = CreateRouteInput;
export declare type CreateRouteCommandOutput = CreateRouteOutput & __MetadataBearer;
export declare class CreateRouteCommand extends $Command<CreateRouteCommandInput, CreateRouteCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: CreateRouteCommandInput;
    constructor(input: CreateRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteCommandInput, CreateRouteCommandOutput>;
    private serialize;
    private deserialize;
}
