import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceCommandInput = UpdateServiceRequest;
export declare type UpdateServiceCommandOutput = UpdateServiceResponse & __MetadataBearer;
export declare class UpdateServiceCommand extends $Command<UpdateServiceCommandInput, UpdateServiceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: UpdateServiceCommandInput;
    constructor(input: UpdateServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput>;
    private serialize;
    private deserialize;
}
