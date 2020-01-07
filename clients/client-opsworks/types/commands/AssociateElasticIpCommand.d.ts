import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssociateElasticIpRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateElasticIpCommandInput = AssociateElasticIpRequest;
export declare type AssociateElasticIpCommandOutput = __MetadataBearer;
export declare class AssociateElasticIpCommand extends $Command<AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssociateElasticIpCommandInput;
    constructor(input: AssociateElasticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
