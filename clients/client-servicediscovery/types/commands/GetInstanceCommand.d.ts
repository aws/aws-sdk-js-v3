import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetInstanceRequest, GetInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceCommandInput = GetInstanceRequest;
export declare type GetInstanceCommandOutput = GetInstanceResponse & __MetadataBearer;
export declare class GetInstanceCommand extends $Command<GetInstanceCommandInput, GetInstanceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetInstanceCommandInput;
    constructor(input: GetInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceCommandInput, GetInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
