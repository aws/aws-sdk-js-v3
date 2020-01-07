import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterElasticIpRequest, RegisterElasticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterElasticIpCommandInput = RegisterElasticIpRequest;
export declare type RegisterElasticIpCommandOutput = RegisterElasticIpResult & __MetadataBearer;
export declare class RegisterElasticIpCommand extends $Command<RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterElasticIpCommandInput;
    constructor(input: RegisterElasticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
