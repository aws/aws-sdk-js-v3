import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcPeeringConnectionCommandInput = CreateVpcPeeringConnectionInput;
export declare type CreateVpcPeeringConnectionCommandOutput = CreateVpcPeeringConnectionOutput & __MetadataBearer;
export declare class CreateVpcPeeringConnectionCommand extends $Command<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateVpcPeeringConnectionCommandInput;
    constructor(input: CreateVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
