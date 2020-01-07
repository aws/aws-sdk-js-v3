import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DisassociateElasticIpRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateElasticIpCommandInput = DisassociateElasticIpRequest;
export declare type DisassociateElasticIpCommandOutput = __MetadataBearer;
export declare class DisassociateElasticIpCommand extends $Command<DisassociateElasticIpCommandInput, DisassociateElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DisassociateElasticIpCommandInput;
    constructor(input: DisassociateElasticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateElasticIpCommandInput, DisassociateElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
