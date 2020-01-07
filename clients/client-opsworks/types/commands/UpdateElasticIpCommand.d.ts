import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateElasticIpRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateElasticIpCommandInput = UpdateElasticIpRequest;
export declare type UpdateElasticIpCommandOutput = __MetadataBearer;
export declare class UpdateElasticIpCommand extends $Command<UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateElasticIpCommandInput;
    constructor(input: UpdateElasticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
