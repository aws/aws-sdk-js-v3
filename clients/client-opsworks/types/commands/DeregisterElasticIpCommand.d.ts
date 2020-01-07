import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterElasticIpRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterElasticIpCommandInput = DeregisterElasticIpRequest;
export declare type DeregisterElasticIpCommandOutput = __MetadataBearer;
export declare class DeregisterElasticIpCommand extends $Command<DeregisterElasticIpCommandInput, DeregisterElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeregisterElasticIpCommandInput;
    constructor(input: DeregisterElasticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterElasticIpCommandInput, DeregisterElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
