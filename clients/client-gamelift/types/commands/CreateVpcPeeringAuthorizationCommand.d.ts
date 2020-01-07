import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcPeeringAuthorizationCommandInput = CreateVpcPeeringAuthorizationInput;
export declare type CreateVpcPeeringAuthorizationCommandOutput = CreateVpcPeeringAuthorizationOutput & __MetadataBearer;
export declare class CreateVpcPeeringAuthorizationCommand extends $Command<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateVpcPeeringAuthorizationCommandInput;
    constructor(input: CreateVpcPeeringAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
