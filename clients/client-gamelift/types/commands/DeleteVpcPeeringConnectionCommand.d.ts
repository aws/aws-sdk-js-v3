import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringConnectionInput, DeleteVpcPeeringConnectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpcPeeringConnectionCommandInput = DeleteVpcPeeringConnectionInput;
export declare type DeleteVpcPeeringConnectionCommandOutput = DeleteVpcPeeringConnectionOutput & __MetadataBearer;
export declare class DeleteVpcPeeringConnectionCommand extends $Command<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteVpcPeeringConnectionCommandInput;
    constructor(input: DeleteVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
