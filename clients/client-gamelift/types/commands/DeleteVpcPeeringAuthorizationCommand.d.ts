import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringAuthorizationInput, DeleteVpcPeeringAuthorizationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcPeeringAuthorizationCommandInput = DeleteVpcPeeringAuthorizationInput;
export declare type DeleteVpcPeeringAuthorizationCommandOutput = DeleteVpcPeeringAuthorizationOutput & __MetadataBearer;
export declare class DeleteVpcPeeringAuthorizationCommand extends $Command<DeleteVpcPeeringAuthorizationCommandInput, DeleteVpcPeeringAuthorizationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteVpcPeeringAuthorizationCommandInput;
    constructor(input: DeleteVpcPeeringAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcPeeringAuthorizationCommandInput, DeleteVpcPeeringAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
